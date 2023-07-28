# Assignment 6: Simple PC Builder Website using Next.Js (Frontend Category)

### Main Part:

Requirements:

Build a clean and straightforward PC Builder website for PC parts and components using Next.js. The website should include a PC Builder tool where users can add selected PC components to build their own PC.

### Navbar:

- Add a button named **PC Builder**.
- Clicking on the **PC Builder** button should redirect the user to the PC Builder page to start building their PC.
- The navbar should also have a Categories dropdown with the following categories:
  - CPU / Processor
  - Motherboard
  - RAM
  - Power Supply Unit
  - Storage Device
  - Monitor
  - Others
    Each category should have a corresponding route. (SSG implementation)

### Home Page: (SSG implementation)

- The home page should feature at least 6 random PC components as Featured Products.

  - Each Featured product card should display the following properties:
    - Image
    - Product Name
    - Category
    - Price
    - Status ( In Stock | Out of stock)
    - Rating (Out of 5 Stars)
  - Each featured product will be clickable and should take the user to the product detail page. (Button/Entire Card)

- There should be 6 Featured Categories under the Featured Product section. The Categories are:
  - CPU / Processor
  - Motherboard
  - RAM
  - Power Supply Unit
  - Storage Device
  - Monitor
  - Others (GPU, Mouse, Keyboard, etc…)

### Featured Category Sections: (SSG implementation)

- Each featured category should be clickable.
- Clicking on any of the Featured Categories will redirect the user to another page where at least 3 products of that category will be displayed.
- Each product card on this page should show the following properties:
  - Image
    - Product Name
    - Category
    - Price
    - Status ( In Stock | Out of stock)
    - Rating (Out of 5 Stars)
- Each product retrieved after querying on this page will also be clickable and should take the user to the product detail page.

### Product Detail Page / Route: (SSG implementation)

- Product Details:
  - Each PC Component must have the following properties:
    - Image
    - Product Name
    - Category
    - Status: In Stock | Out of stock
    - Price
    - Description
    - Key Features (like Brand, Model, Specification, Port, Type, Resolution, Voltage, etc)
    - Individual Rating (Out of 5 Stars)
    - Average Rating (Out of 5 Stars)
    - Reviews

### PC Builder Page: (SSR implementation)

- The PC Builder page should have category sections as follows:
  - CPU / Processor
  - Motherboard
  - RAM
  - Power Supply Unit
  - Storage Device
  - Monitor
- Each category will have a **Choose/Select** Button.
- Clicking on the **Choose/Select** Button will take the user to another page where at least 3 components of that specific category will be displayed.
- Each component card on this page should show the following properties:
  - Image
  - Product Name
  - Category
  - Price
  - Status
  - Rating
- Each component card on that page will have an **Add To Builder** Button.
- Clicking on this button will redirect the user to the PC Builder page, and it will update the state of that selected category section in the PC Builder Page with the selected component below. (You can use Redux / Context API to create a central store for this)
- After adding at least 5 - 6 Components (CPU, RAM, Power Supply, Storage, Motherboard, Casing), the user will be able to click on the **Complete Build** button. (This button will be disabled unless the user adds at least 5-6 of the mentioned components)

### Bonus Part:

- The PC Builder Page should be a protected/private route (only logged-in users can visit this route). You have to use NextAuth with at least one social login (Google/Github) provider to enable user authentication.
- Clicking on the **Complete Build** button will show a success alert.
- The Home page should also have a hero section/banner section and a footer.
- The entire application must be responsive for both mobile and desktop devices to ensure an enjoyable user experience across all devices.
- Create a [ReadMe.md](http://ReadMe.md) file describing your application, explaining its features, and providing clear instructions on how to run the project.

### Bonus Part:

- The PC Builder Page should be a protected/private route (only logged-in users can visit this route). You have to use NextAuth with at least one social login provider to enable user authentication.
- Clicking on the **Complete Build** button will show a success alert.
- The Home page should also have a hero section/banner section and a footer.
- The entire application must be responsive for both mobile and desktop devices to ensure an enjoyable user experience across all devices.
- Create a [ReadMe.md](http://ReadMe.md) file describing your application, explaining its features, and providing clear instructions on how to run the project.

# Deadline:

60 Marks ( Till 29 July, Saturday 11.59 PM )
50 Marks ( Till 30 July, Sunday 11.59 PM )

What to submit
Deployed Frontend Live Link ( Vercel or any other platform)
Your Frontend Github Repository Link
You should add the links to the readme.md file.

# Notes

1. To manage the product's data, you need to create your own backend. This backend could be a single-page backend server or integrated with Next API routes.
2. Do not use 'app' router.

//# Category:
https://i.ibb.co/c6vBpZW/chip.png
https://i.ibb.co/Mhm3PXy/cpu.png
https://i.ibb.co/cFfCLGC/monitor.png
https://i.ibb.co/XCt0Mz1/motherboard.png
https://i.ibb.co/Vpqy6Gs/power-supply.png
https://i.ibb.co/gvyc9Wr/video-card.png

//# Processor:
https://i.ibb.co/zS9ZPcG/51f2hk-Wj-Tl-L-AC-UY327-FMwebp-QL65.webp
https://i.ibb.co/9qHpvMH/71id-AEIDhv-L-AC-UY327-FMwebp-QL65.webp
https://i.ibb.co/bvNQjrP/91-YH5-Dj-Wbe-L-AC-SX300-SY300-QL70-FMwebp.webp

//# Motherboard:
https://i.ibb.co/fQ89F71/71b-Cz-Km-CHQL-AC-UY327-FMwebp-QL65.webp
https://i.ibb.co/JQZnmRB/71-Gm7vworo-L-AC-UY327-FMwebp-QL65.webp
https://i.ibb.co/FKLbNvM/710hy-HWebn-L-AC-UY327-FMwebp-QL65.webp

//# Ram:
https://i.ibb.co/SNpbWjg/41a2jzud-Kt-L-AC-UY327-FMwebp-QL65.webp
https://i.ibb.co/5hF5P08/71e6-YWJio-L-AC-UY327-FMwebp-QL65.webp
https://i.ibb.co/Kb5pnVj/5134-NIlg-Pp-S-AC-SX679-PIbundle-2-Top-Right-0-0-SH20.jpg

//# Power Supply:
https://i.ibb.co/m5nChZf/71-VX0-SPnbv-L-AC-UY327-FMwebp-QL65.webp
https://i.ibb.co/Jx4pRrC/81k55rfk1i-L-AC-UY327-FMwebp-QL65.webp
https://i.ibb.co/rdgbR6y/710gi-QRHy-QS-AC-UY327-FMwebp-QL65.webp

//# Monitor:
https://i.ibb.co/Zhr4Xj7/51b5m-T6-ZKL-AC-UY327-FMwebp-QL65.webp
https://i.ibb.co/k2xXVW0/71-4-Ze-UWzq-L-AC-UY327-FMwebp-QL65.webp
https://i.ibb.co/jvw0Qzc/914o-VQ1-DS1-L-AC-UY327-FMwebp-QL65.webp

//# Others:
https://i.ibb.co/zm7TV90/81c5s0yiy-XL-AC-UY327-FMwebp-QL65.webp
https://i.ibb.co/DLnPM8b/81rg-38-Ad-JL-AC-UL480-FMwebp-QL65.webp
https://i.ibb.co/3mKZRGT/817-PMNo-Kf-XL-AC-UY327-FMwebp-QL65.webp

//# Products:
https://i.ibb.co/4JJSDp4/51k5w-AFZg-FL-AC-UY327-FMwebp-QL65.webp
https://i.ibb.co/nzYg3j7/71-Av-Cdkq-Vk-L-AC-UY327-FMwebp-QL65.webp
https://i.ibb.co/NxLZwCd/71ct-RE34-Ru-L-AC-UY327-FMwebp-QL65.webp
https://i.ibb.co/xGy7bgm/81k-VFBp13-RL-AC-UL480-FMwebp-QL65.webp
https://i.ibb.co/hfZnZyb/515-Lrr-MQw8-L-AC-UY327-FMwebp-QL65.webp
https://i.ibb.co/0Fm5XQb/813-Lr33nf-IL-AC-UY327-FMwebp-QL65.webp
