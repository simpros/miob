CREATE TABLE `miob_entities` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`iobId` text NOT NULL,
	`name` text NOT NULL,
	`kind` text NOT NULL,
	`type` text NOT NULL,
	`roomId` text NOT NULL,
	FOREIGN KEY (`roomId`) REFERENCES `rooms`(`iobId`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `miob_entities_iobId_unique` ON `miob_entities` (`iobId`);--> statement-breakpoint
CREATE TABLE `rooms` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`iobId` text NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `rooms_iobId_unique` ON `rooms` (`iobId`);--> statement-breakpoint
CREATE TABLE `synch_log` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`createdAt` integer DEFAULT (unixepoch()),
	`updatedAt` integer DEFAULT (unixepoch())
);
