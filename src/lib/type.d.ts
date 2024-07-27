export type ChildMenutItem = {
	label: string;
};

export type MenuItem = {
	label: string;
	isOpen: boolean;
	childMenutItems?: ChildMenutItem[];
};
