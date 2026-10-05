CREATE TABLE `trial_applications` (
	`id` int AUTO_INCREMENT NOT NULL,
	`parentName` varchar(100) NOT NULL,
	`whatsapp` varchar(20) NOT NULL,
	`email` varchar(320) NOT NULL,
	`grade` varchar(50) NOT NULL,
	`subjects` text NOT NULL,
	`painPoints` text NOT NULL,
	`status` enum('pending','contacted','scheduled','completed','cancelled') NOT NULL DEFAULT 'pending',
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `trial_applications_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `tutors` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`education` varchar(255) NOT NULL,
	`subjects` text NOT NULL,
	`bio` text NOT NULL,
	`avatarUrl` text,
	`cvUrl` text,
	`isActive` int NOT NULL DEFAULT 1,
	`displayOrder` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `tutors_id` PRIMARY KEY(`id`)
);
