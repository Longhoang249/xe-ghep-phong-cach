create table if not exists public.bookings (
  booking_id text primary key,
  created_at timestamptz not null default now(),
  customer_name text not null,
  phone text not null,
  pickup_address text not null,
  pickup_lat double precision,
  pickup_lng double precision,
  dropoff_address text not null,
  dropoff_lat double precision,
  dropoff_lng double precision,
  departure_date date not null,
  departure_time time not null,
  service_type text not null,
  passenger_count integer not null default 0,
  vehicle_type text,
  estimated_distance numeric,
  estimated_duration integer,
  estimated_price bigint,
  source text,
  utm_source text,
  utm_campaign text,
  utm_content text,
  referrer text,
  landing_page text,
  status text not null default 'new' check (status in ('new','contacted','confirmed','completed','cancelled'))
);
alter table public.bookings enable row level security;
create index if not exists bookings_created_at_idx on public.bookings (created_at desc);
create index if not exists bookings_status_idx on public.bookings (status);
