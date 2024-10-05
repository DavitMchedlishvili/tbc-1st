import Word from "../public/assets/Word.png";
import Excel from "../public/assets/Excel.png"
import PowerPoint from "../public/assets/PowerPoint.png";

const data = [
  {
    id: 1,
    title: "Microsoft Word: The Ubiquitous Word Processor Dominating Global Use",
    description:
      "    Microsoft Word is a word processing software developed by Microsoft. It allows users to create, edit, and format documents, including text, images, tables, and other elements. Word is widely used for writing letters, reports, essays, and other professional documents. It offers features like spell check, grammar suggestions, templates, and collaborative tools, making it versatile for both personal and business use.",
    photo: Word,
    article: `
    Since its release in 1983, Microsoft Word has grown into the most widely used word processing software on the planet. Today, it boasts over 1.2 billion users and supports 100+ languages, making it an essential tool for students, professionals, and writers globally. Word holds an 80% market share in the word processing space, with over 1 billion documents created every day.

    Its widespread adoption is largely due to its flexibility and ease of use. Microsoft Word provides users with over 1000 templates for creating resumes, letters, reports, and research papers, enabling both professionals and students to streamline their document creation process. Word is most commonly used for report writing (41%), followed by letters and resumes (25%), and academic research papers (19%).

    With features like real-time collaboration, formatting tools, and integration with cloud services, Microsoft Word remains the gold standard in document creation and editing. Whether you're drafting a memo or writing your next novel, Word's capabilities make it indispensable.
  `,
    btnColor: "#00A4EF",
  },
  {
    id: 2,
    title: "Microsoft PowerPoint: Presentation Stats That Show Its Global Impact",
    description:
      "Microsoft Excel is a spreadsheet software developed by Microsoft. It is used for organizing, analyzing, and visualizing data through tables, formulas, charts, and graphs. Excel is widely used for tasks such as budgeting, data analysis, financial modeling, and project management. Its powerful functions, like pivot tables and macros, make it a versatile tool for both simple and complex data manipulation.",
    photo: PowerPoint,
    article: `
    Microsoft PowerPoint has been the leader in presentation software since its debut in 1987, and today, it's used by more than 500 million people worldwide. Its importance in business and education is undeniable, with over 30 million presentations created every day.

    The business world in particular relies heavily on PowerPoint, with 35 million presentations delivered daily in meetings, conferences, and corporate pitches. Holding a 65% market share, PowerPoint remains the preferred tool for professionals to visualize and share their ideas. It’s estimated that more than 500 million slides are created each day, covering everything from quarterly financial reports to new marketing strategies.

    PowerPoint’s versatility shines in sales presentations, which make up 39% of its usage, followed by educational purposes at 31%. Whether you’re building an investor pitch deck or teaching a class, PowerPoint’s range of design templates and customizations has made it the go-to choice for visual storytelling.
  `,
    btnColor: "#d04423",
  },
  {
    id: 3,
    title: "The Power of Microsoft Excel: Essential Stats You Should Know",
    description:
      "    Microsoft PowerPoint is a presentation software developed by Microsoft. It allows users to create slideshows composed of text, images, charts, animations, and multimedia. PowerPoint is commonly used for business presentations, educational lectures, and personal projects. It offers features like slide transitions, templates, and collaboration tools, making it easy to design and present visually appealing and professional presentations.",
    photo: Excel,
    article: `
    Microsoft Excel has been a staple in business, finance, and data analysis since its release in 1985. With over 750 million users globally, it remains the most dominant spreadsheet software on the market, holding approximately 85% of the market share. From financial planning to inventory tracking, Excel is the go-to tool for professionals and organizations worldwide.

    One of the reasons Excel stands out is its impressive capacity — able to handle over 1 million rows and 16,000 columns of data per sheet. This is crucial for large-scale data analysis, especially for businesses that rely on its 400+ built-in functions for everything from basic arithmetic to advanced statistical analysis.

    In fact, 81% of businesses report that they rely on Excel for daily financial reporting, budget management, and even forecasting. The most common use cases include financial modeling (34%), data analysis (28%), and inventory tracking (15%). Whether it’s simple charting or complex pivot tables, Excel remains the backbone of decision-making for industries across the globe.
  `,
    btnColor: "#1D6F42",
  },
];

export default data;
