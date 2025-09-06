# 📚 Book Inventory Tracker

A comprehensive web application for managing book inventories with advanced search, filtering, and analytics capabilities. Built with modern web technologies for optimal performance and user experience.

![Screenshot 1](./public/Screenshot%202025-09-06%20042354.png)
![Screenshot 2](./public/Screenshot%202025-09-06%20042445.png)
![Screenshot 3](./public/Screenshot%202025-09-06%20042512.png)
![Screenshot 4](./public/Screenshot%202025-09-06%20042529.png)


## 🌟 Features

### Core Functionality
- **Complete CRUD Operations**: Add, view, update, and delete books
- **Real-time Search**: Search books by title, author, or ISBN
- **Advanced Filtering**: Filter books by category (Fiction, Non-Fiction, Science, History)
- **Inventory Management**: Track stock levels with visual indicators
- **Price Management**: Monitor book pricing and total inventory value

### User Interface
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI Components**: Clean, professional interface with shadcn/ui
- **Interactive Charts**: Visual analytics with pie charts for category distribution
- **Loading States**: Smooth loading animations and skeleton screens
- **Toast Notifications**: Real-time feedback for user actions

### Analytics & Reporting
- **Statistics Dashboard**: Overview of total books, copies, and inventory value
- **Category Distribution**: Visual breakdown of books by genre
- **Stock Level Monitoring**: Quick identification of low stock and out-of-stock items

## 🚀 Tech Stack

### Frontend
- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.0** - Latest React with enhanced features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - For Chart Pie component
- **Recharts** - Data visualization library
- **React Hot Toast** - Toast notification system

### Backend
- **Next.js API Routes** - Server-side API endpoints
- **Prisma ORM** - Database toolkit and query builder
- **MySQL** - Relational database

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager
- MySQL database

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/book-inventory-tracker.git
   cd book-inventory-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Configuration**
   
   Create a `.env` file in the root directory:
   ```env
   # Database Configuration
   DATABASE_URL="mysql://username:password@localhost:3306/book_inventory"
   
   # Next.js Configuration
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-secret-key"
   ```

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma migrate deploy
   
   # (Optional) Seed the database
   npx prisma db seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Access the application**
   
   Open [http://localhost:3000](http://localhost:3000) in your browser

## 🗂️ Project Structure

```
book-inventory-tracker/
├── prisma/
│   ├── migrations/          # Database migrations
│   └── schema.prisma        # Database schema
├── src/
│   └── app/
│       ├── api/             # API routes
│       │   ├── books/       # Book CRUD operations
│       │   └── search/      # Search functionality
│       ├── components/      # Reusable UI components
│       │   ├── SideBar.tsx
│       │   ├── Search.tsx
│       │   └── chartPie.tsx
│       ├── dashboard/       # Dashboard pages
│       │   └── book/        # Book management pages
│       ├── books/           # Book catalog page
│       ├── search/          # Search results page
│       ├── statistics/      # Analytics page
│       └── globals.css      # Global styles
├── lib/
│   ├── prisma.ts           # Prisma client configuration
│   └── utils.ts            # Utility functions
└── components.json         # shadcn/ui configuration
```

## 📖 Usage Guide

### Managing Books

1. **Adding a New Book**
   - Navigate to the dashboard
   - Click "Add Book" button
   - Fill in all required fields (Title, Author, ISBN, Category, Quantity, Price, Image URL)
   - Click "Submit" to save

2. **Updating Book Information**
   - Go to the Books Table in the dashboard
   - Click "Edit" next to the desired book
   - Modify the necessary fields
   - Click "Update" to save changes

3. **Deleting Books**
   - In the Books Table, click "Delete" next to the book
   - Confirm the deletion action

### Search and Filter

1. **Searching Books**
   - Use the search bar on any page
   - Enter book title, author name, or ISBN
   - Press Enter or click the search icon

2. **Filtering by Category**
   - Navigate to the Books page
   - Use category filter buttons (All, Fiction, Non-Fiction, Science, History)
   - Results update automatically

### Analytics

1. **View Statistics**
   - Go to the Statistics page
   - Review summary cards showing:
     - Total unique books
     - Total copies in inventory
     - Total inventory value
   - Analyze category distribution with the pie chart

## 🔧 API Endpoints

### Books API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/books` | Retrieve all books |
| POST | `/api/books` | Create a new book |
| GET | `/api/books/[id]` | Get a specific book |
| PUT | `/api/books/[id]` | Update a book |
| DELETE | `/api/books/[id]` | Delete a book |

### Search API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/search?query={searchTerm}` | Search books by title |

## 🎨 Customization

### Styling
- Modify `src/app/globals.css` for global styles
- Update Tailwind configuration in `tailwind.config.js`
- Customize component styles using Tailwind classes

### Database Schema
- Edit `prisma/schema.prisma` to modify the data model
- Run `npx prisma migrate dev` to apply changes

### UI Components
- Components are built with shadcn/ui and can be customized
- Modify component files in `src/app/components/`

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Connect your GitHub repository to Vercel
   - Add environment variables in Vercel dashboard
   - Deploy automatically

### Other Platforms

The application can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use meaningful commit messages
- Add proper error handling
- Write unit tests for new features
- Ensure responsive design compatibility

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues and Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/book-inventory-tracker/issues) page
2. Create a new issue with detailed information
3. Include steps to reproduce the problem

## 🔗 Links

- **Live Demo**: [https://book-inventory-tracker.vercel.app](https://book-inventory-tracker.vercel.app)
- **Documentation**: [https://docs.example.com](https://docs.example.com)
- **GitHub Repository**: [https://github.com/yourusername/book-inventory-tracker](https://github.com/yourusername/book-inventory-tracker)

## 🏆 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Prisma](https://prisma.io/) for the excellent database toolkit
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Recharts](https://recharts.org/) for data visualization

---

**Made with ❤️ by abdelhamid oug-lhacen
