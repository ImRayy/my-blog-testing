export interface links {
  link: string;
  label: string;
  icon: string;
}
export interface sidebar {
  profile_image: string;
  backdrop_image: string;
  links: {
    navigation: links[];
    interests: links[];
    others: links[];
  };
}
export interface json_config {
  sidebar: sidebar;
}

export interface frontmatter {
  title: string;
  date: number;
  author: string;
  description: string;
  header_image: string;
  draft: boolean;
  content: string;
  // slug: string
  slug: {
    current: string;
  };
  tags: [];
}

export interface markdownHeader {
  frontmatter: frontmatter;
  slug: string;
}
export interface markdownContent {
  frontmatter: frontmatter;
  slug: string;
  content: string;
}
