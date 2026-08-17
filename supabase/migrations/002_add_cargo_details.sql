alter table public.bookings
  add column if not exists cargo_name text,
  add column if not exists cargo_length_cm numeric,
  add column if not exists cargo_width_cm numeric,
  add column if not exists cargo_height_cm numeric,
  add column if not exists cargo_weight_kg numeric;
