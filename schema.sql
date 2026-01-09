-- Create a table for public profiles
create table public.users (
  id uuid not null references auth.users on delete cascade,
  email text,
  created_at timestamptz default now(),
  primary key (id)
);

alter table public.users enable row level security;

create policy "Users can view their own profile."
  on public.users for select
  using ( auth.uid() = id );

create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.users (id, email)
  values (new.id, new.email);
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
