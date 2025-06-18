-- Migration number: 0003 	 2025-06-18T05:17:29.611Z
ALTER TABLE cow_records ADD COLUMN farm_id TEXT;
ALTER TABLE cow_records ADD COLUMN name TEXT;
