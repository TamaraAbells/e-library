import { createServer, Model } from "miragejs"
import { Images } from "../assets"

createServer({
  models: {
    category: Model,
  },

  routes() {
    this.namespace = "api"
    this.urlPrefix = process.env.REACT_APP_BASE_URL ? process.env.REACT_APP_BASE_URL : ''
    this.passthrough()
    this.get("/category-list", () => {
      return {
        categories: [
          { id: 1, title: "Law", books: 8000, image: Images.CategoryImages.Law },
          { id: 2, title: "Islamic Studies", books: 500, image: Images.CategoryImages.Islamic },
          { id: 3, title: "History & Biography", books: 200, image: Images.CategoryImages.History },
          { id: 4, title: "Business & Economics", books: 4200, image: Images.CategoryImages.Business },
          { id: 5, title: "Political Science", books: 19800, image: Images.CategoryImages.Political },
          { id: 6, title: "Language & Literature", books: 600, image: Images.CategoryImages.Language },
          { id: 7, title: "Science & Technology", books: 3200, image: Images.CategoryImages.Science },
          { id: 8, title: "Social Sciences", books: 9000, image: Images.CategoryImages.Social },
          { id: 9, title: "Media & Communication", books: 8000, image: Images.CategoryImages.Media },
          { id: 10, title: "Heritage", books: 5200, image: Images.CategoryImages.Heritage },
          { id: 11, title: "Arts", books: 2000, image: Images.CategoryImages.Art },
          { id: 12, title: "Arts and Architecture", books: 1000, image: Images.CategoryImages.Arts },
          { id: 13, title: "Classical Literature", books: 7000, image: Images.CategoryImages.Classical },
          { id: 14, title: "Educational Science", books: 1000, image: Images.CategoryImages.Educational },
          { id: 15, title: "School", books: 700, image: Images.CategoryImages.School },
          { id: 16, title: "Contemporary References", books: 200, image: Images.CategoryImages.Contemporary },
          
        ],
      }
    })
  },
})