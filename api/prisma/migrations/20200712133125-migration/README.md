# Migration `20200712133125-migration`

This migration has been generated by sunny yuen at 7/12/2020, 1:31:25 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

ALTER TABLE "quaint"."Contact" ADD COLUMN "phone" TEXT   ;

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200712132359-migration..20200712133125-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -9,8 +9,11 @@
 }
 // Define your own datamodels here and run `yarn redwood db save` to create
 // migrations for them.
+
+// optional fields can be marked with ? eg. careatedAt String?
+
 model Post {
   id        Int      @id @default(autoincrement())
   title     String
   body      String
@@ -21,6 +24,7 @@
   id        Int      @id @default(autoincrement())
   name      String
   email     String
   message   String
+  phone     String?
   createdAt DateTime @default(now())
 }
```


