export class Product {
	id:Number;
	title:String;
	description:String;
	vendor:String;
	type:String;
	tag:String;
	sku:String;
	requireShipping:Boolean;
	taxable:boolean;
	price:Number;
	grams:Number;
	createdAt:String;

	constructor(){}

	getProduct() {
		const prod = new Product();
			prod.id = 4355464101910;
			prod.title = "CEP Gloss Desktop Drawer Storage Unit";
			prod.description = "Desktop module features five, smooth-sliding drawers combined with ergonomic handles to make it " + 
				"a breeze to access your supplies. Retaining stops prevent each drawer from completely sliding out to keep everything " + 
				"where it should be. Its one-piece, ultra-robust body allows perfectly stable stacking of modules on several levels if needed. " + 
				"Antiskid rubber feet prevent sliding on smooth surfaces for single-handed access to any drawer. Three different size " + 
				"drawers hold a wide variety of supplies, including small accessories, files, tablet, catalogs, bulky technological " + 
				"accessories and more.";
			prod.vendor = "CEP";
			prod.type = "Desktop Organizers & Holders";
			prod.tag = "Desktop Organizers"
			prod.sku = "CEP1072130411"
			prod.requireShipping = false;
			prod.taxable = true;
			prod.price = 92.29;
			prod.grams = 3175;
			prod.createdAt = "2020-05-21T17:01:15-04:00";

		return prod;

	}

/*	
	getJsonProducts() {

		const jsonProds = "[{\"id\":4355464134678,    \
			\"title\":\"Safco Desktop Plastic Toolbox\",    \
			\"description\":\"Durable plastic toolbox is large enough to store a variety of desktop essentials within reach. Five compartments of various sizes hold writing utensils, small notebooks, paper clips and more. Handle allows easy mobility.\",    \
			\"vendor\":\"Safco Products\",    \
			\"type\":\"Desktop Organizers & Holders\",    \
			\"tag\":\"Desktop Organizers\",    \
			\"createAt\": \"2020-05-21 17:01:18\",    \
			\"sku\":\"SAF3286BL\",    \
			\"requiresShipping\":true,    \
			\"taxable\":true,    \
			\"price\":\"56.00\",    \
			\"grams\":1361},    \
		{ \"id\":4355464101910,    \
			\"title\":\"CEP Gloss Desktop Drawer Storage Unit\",    \
			\"description\":\"Desktop module features five, smooth-sliding drawers combined with ergonomic handles to make it a breeze to access your supplies. Retaining stops prevent each drawer from completely sliding out to keep everything where it should be. Its one-piece, ultra-robust body allows perfectly stable stacking of modules on several levels if needed. Antiskid rubber feet prevent sliding on smooth surfaces for single-handed access to any drawer. Three different size drawers hold a wide variety of supplies, including small accessories, files, tablet, catalogs, bulky technological accessories and more.\",    \
			\"vendor\":\"CEP\",    \
			\"type\":\"Desktop Organizers & Holders\",    \
			\"tag\":\"Desktop Organizers\",    \
			\"createdAt\":\"2020-05-21T17:01:15-04:00\",    \
			\"sku\":\"CEP1072130411\",    \
			\"requiresShipping\":true,    \
			\"taxable\":true,    \
			\"price\":\"92.29\",    \
			\"grams\":3175},    \
		{\"id\":4355464069142,    \
			\"title\":\"Learning Resources Create-a-Space 10-Piece Bundle\",    \
			\"description\":\"Create-a-Space bundle features a variety of storage options to keep your little artists organized. Magnetic bins with write-and-wipe labels stand on their own or attach to a magnetic surface to keep your supplies where you need them most. 10-piece storage center includes eight colorful containers that sit on a circular tray for quick access to a variety of supplies. Magnetic storage pouches feature a clear front section to help you quickly locate the supplies you need. Perfect for use in the classroom or at home, this Create-a-Space bundle offers plenty of space to store glue, tape, rubber bands, scissors, writing utensils, note cards and more.\",    \
			\"vendor\":\"Learning Resources\",    \
			\"type\":\"Desktop Organizers & Holders\",    \
			\"tag\":\"Desktop Organizers\",    \
			\"createdAt\":\"2020-05-21T17:01:12-04:00\",    \
			\"sku\":\"LRNLER3808\",    \
			\"requiresShipping\":true,    \
			\"taxable\":true,    \
			\"price\":\"55.93\",    \
			\"grams\":2268},    \
		{\"id\":4355464036374,    \
			\"title\":\"Safco Mesh Drawer Organizer - 7 Compartment(s)\",    \
			\"description\":\"Drawer organizer is an easy way to organize pens, pencils, rulers and other desk essentials. Steel mesh is recyclable.\",    \
			\"vendor\":\"Safco Products\",    \
			\"type\":\"Desktop Organizers & Holders\",    \
			\"tag\":\"Desktop Organizers\",    \
			\"created_at\":\"2020-05-21T17:01:09-04:00\",    \
			\"sku\":\"SAF3262BL\",    \
			\"requiresShipping\":true,    \
			\"taxable\":true,    \
			\"price\":\"47.00\",    \
			\"grams\":907},    \
		{\"id\":4355464003606,    \
			\"title\":\"Rolodex Mesh Oval Pencil Cup - 4 Compartment(s)\",    \
			\"description\":\"Mesh Oval Pencil Cup offers divided compartments for easy organization of different writing utensils. Additional compartments easily accommodate paper clips and small accessories. Drawer adds more storage for 3 x 3 notepads or other small items. Pencil cup is made of rolled mesh steel in a criss-cross design.\",    \
			\"vendor\":\"Sanford, L.P.\",    \
			\"type\":\"Desktop Organizers & Holders\",    \
			\"tag\":\"Desktop Organizers\",    \
			\"createdAt\":\"2020-05-21T17:01:04-04:00\",    \
			\"sku\":\"ROL1746466\",    \
			\"requiresShipping\":true,    \
			\"taxable\":true,    \
			\"price\":\"23.40\",    \
			\"grams\":671},    \
		{\"id\":4355463970838,    \
			\"title\":\"Safco Stacking Plastic Desktop Sorter Sets - 4 Compartment(s)\",    \
			\"description\":\"Part of Safco's ABS Desk Accessories, this combination desktop organizer is ideal for sorting documents and holding office supplies such as pens, pencils, paper clips and sticky notes. Organizer consists of four stacking components with aesthetically pleasing, rounded corners. Four-piece set includes large supply storage tray, small supply storage tray and two letter-size sorting trays for your important papers. Stacking Desktop Sorter Set is made of durable plastic.\",    \
			\"vendor\":\"Safco Products\",    \
			\"type\":\"Desktop Organizers & Holders\",    \
			\"tag\":\"Desktop Organizers\",    \
			\"createdAt\":\"2020-05-21T17:01:01-04:00\",    \
			\"sku\":\"SAF3285WH\",    \
			\"requiresShipping\":true,    \
			\"taxable\":true,    \
			\"price\":\"56.00\",    \
			\"grams\":1361}   \
		]";

	}
*/	
}
