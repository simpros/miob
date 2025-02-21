CREATE TABLE `miob_entity` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`iobId` text NOT NULL,
	`name` text NOT NULL,
	`kind` text NOT NULL,
	`type` text NOT NULL,
	`assignedTo` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `miob_entity_iobId_unique` ON `miob_entity` (`iobId`);--> statement-breakpoint
CREATE TABLE `synch_log` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`createdAt` integer DEFAULT (unixepoch()),
	`updatedAt` integer DEFAULT (unixepoch())
);
