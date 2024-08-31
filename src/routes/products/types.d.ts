export type Product = {
	id: string;
	name: string;
	imageUrl: string;
	description: string;
};

export type ChildCategory = {
	child_id: string;
	child_label: string;
};

export type ParentCategory = {
	parent_id: string;
	parent_label: string;
	isOpen: boolean;
	children: ChildCategory[];
};

export type CategoryQuery = {
	label: string;
	id: string;
};
