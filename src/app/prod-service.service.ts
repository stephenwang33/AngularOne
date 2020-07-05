import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProdServiceService {

  products: Product[];

  constructor() {
    this.products = this.getDefaultProducts();
  }

  getProduct(id:Number) {
    //return this.products.filter(x => (x.id == id));
    return this.products.find(x => x.id == id);
  }

  getDefaultProducts() {
      const prod1 = new Product();
      prod1.id = 4355464134678;
      prod1.title = "Safco Desktop Plastic Toolbox";
      prod1.description = "Durable plastic toolbox is large enough to store a variety of desktop essentials within reach. " +  
        "Five compartments of various sizes hold writing utensils, small notebooks, paper clips and more. " + 
        "Handle allows easy mobility.";
      prod1.vendor = "Safco Products";
      prod1.type = "Desktop Organizers & Holders";
      prod1.tag = "Desktop Organizers";
      prod1.sku = "SAF3286BL";
      prod1.requireShipping = true;
      prod1.taxable = true;
      prod1.price = 56.00;
      prod1.grams = 1361; 
      prod1.createdAt = "2020-05-21T17:01:20-04:00";

      const prod2 = new Product();
      prod2.id = 4355464101910;
      prod2.title = "CEP Gloss Desktop Drawer Storage Unit";
      prod2.description = "Desktop module features five, smooth-sliding drawers combined with ergonomic handles to make it " + 
                  "a breeze to access your supplies. Retaining stops prevent each drawer from completely sliding out to keep everything " +
                  "where it should be. Its one-piece, ultra-robust body allows perfectly stable stacking of modules on several levels if needed. " + 
                  "Antiskid rubber feet prevent sliding on smooth surfaces for single-handed access to any drawer. Three different size " + 
                  "drawers hold a wide variety of supplies, including small accessories, files, tablet, catalogs, bulky technological " +
                  "accessories and more.";
        prod2.vendor = "CEP";
      prod2.type = "Desktop Organizers & Holders";
      prod2.tag = "Desktop Organizers"
      prod2.sku = "CEP1072130411"
      prod2.requireShipping = false;
      prod2.taxable = true;
      prod2.price = 92.29;
      prod2.grams = 3175;
      prod2.createdAt = "2020-05-21T17:01:15-04:00";

      const prod3 = new Product();
      prod3.id = 4355464069142;
      prod3.title = "Learning Resources Create-a-Space 10-Piece Bundle";
      prod3.description = "Create-a-Space bundle features a variety of storage options to keep your little artists " +
        "organized. Magnetic bins with write-and-wipe labels stand on their own or attach to a magnetic surface " +
        "to keep your supplies where you need them most. 10-piece storage center includes eight colorful containers " +
        "that sit on a circular tray for quick access to a variety of supplies. Magnetic storage pouches feature a " +
        "clear front section to help you quickly locate the supplies you need. Perfect for use in the classroom or at " +
        "home, this Create-a-Space bundle offers plenty of space to store glue, tape, rubber bands, scissors, writing" +
        "utensils, note cards and more. ";
      prod3.vendor = "Learning Resources";
      prod3.type = "Desktop Organizers & Holders";
      prod3.tag = "Desktop Organizers";
      prod3.sku = "LRNLER3808";
      prod3.requireShipping = true;
      prod3.taxable = false;
      prod3.price = 55.93;
      prod3.grams = 2268; 
      prod3.createdAt = "2020-05-21T17:01:12-04:00";

      const prod4 = new Product();
      prod4.id = 4355464036374;
      prod4.title = "Safco Mesh Drawer Organizer - 7 Compartment(s)";
      prod4.description = "Drawer organizer is an easy way to organize pens, pencils, rulers and other desk essentials. Steel mesh is recyclable.";
        prod4.vendor = "Safco Products";
      prod4.type = "Desktop Organizers & Holders";
      prod4.tag = "Desktop Organizers"
      prod4.sku = "SAF3262BL"
      prod4.requireShipping = false;
      prod4.taxable = false;
      prod4.price = 47.48;
      prod4.grams = 907;
      prod4.createdAt = "2020-05-21T17:01:09-04:00";

      const prod5 = new Product();
      prod5.id = 4355464003606;
      prod5.title = "Rolodex Mesh Oval Pencil Cup - 4 Compartment(s)";
      prod5.description = "Mesh Oval Pencil Cup offers divided compartments for easy organization of different writing utensils. Additional " +
        "compartments easily accommodate paper clips and small accessories. Drawer adds more storage for 3 x 3 notepads or other " +
        "small items. Pencil cup is made of rolled mesh steel in a criss-cross design.";
      prod5.vendor = "Sanford, L.P.";
      prod5.type = "Desktop Organizers & Holders";
      prod5.tag = "Desktop Organizers";
      prod5.sku = "ROL1746466";
      prod5.requireShipping = true;
      prod5.taxable = false;
      prod5.price = 23.40;
      prod5.grams = 671; 
      prod5.createdAt = "2020-05-21T17:01:04-04:00";

      const prod6 = new Product();
      prod6.id = 4355463970838;
      prod6.title = "Safco Stacking Plastic Desktop Sorter Sets - 4 Compartment(s)";
      prod6.description = "Part of Safco's ABS Desk Accessories, this combination desktop organizer is ideal for sorting documents " +
        "and holding office supplies such as pens, pencils, paper clips and sticky notes. Organizer consists of four stacking " +
        "components with aesthetically pleasing, rounded corners. Four-piece set includes large supply storage tray, small supply " +
        "storage tray and two letter-size sorting trays for your important papers. Stacking Desktop Sorter Set is made of durable plastic.";
        prod6.vendor = "Safco Products";
      prod6.type = "Desktop Organizers & Holders";
      prod6.tag = "Desktop Organizers"
      prod6.sku = "SAF3285WH"
      prod6.requireShipping = true;
      prod6.taxable = true;
      prod6.price = 66.00;
      prod6.grams = 1907;
      prod6.createdAt = "2020-05-21T17:01:01-04:00";

      return [prod1, prod2, prod3, prod4, prod5, prod6];
  }


}
