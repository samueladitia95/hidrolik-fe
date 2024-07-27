export type ChildMenutItem = {
	label: string;
	link: string;
};

export type MenuItem = {
	label: string;
	isOpen: boolean;
	childMenutItems?: ChildMenutItem[];
	link: string;
};
