alter table public.bookings
  add column if not exists estimated_price_semantic text,
  add column if not exists estimated_price_unit text;

update public.bookings
set estimated_price_semantic = case
  when estimated_price is null then 'CONTACT'
  else 'LEGACY_UNCLASSIFIED'
end
where estimated_price_semantic is null;

alter table public.bookings
  alter column estimated_price_semantic set default 'CONTACT',
  alter column estimated_price_semantic set not null,
  add constraint bookings_estimated_price_semantic_check
    check (estimated_price_semantic in ('STARTING_FROM', 'ESTIMATE', 'CONTACT', 'LEGACY_UNCLASSIFIED')),
  add constraint bookings_estimated_price_unit_check
    check (estimated_price_unit is null or estimated_price_unit in ('PER_PERSON', 'PER_TRIP'));
