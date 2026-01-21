import { MetadataRoute } from "next";

//Gives importance to different pages
export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://littleargent.com";

	return [
		{
			url: `${baseUrl}/`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1.0,
		},
	];
}
