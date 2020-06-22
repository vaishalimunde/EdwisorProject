import { Injectable } from '@angular/core';

 @Injectable()
export class BlogService {
  public allBlogs=[
    {
      "blogId":"1",
      "lastModified":"2016-01-05T09:05:05.035Z",
      "created":"2016-01-05T09:05:05.035Z",
      "tags":[],
      "author":"Admin",
      "category":"Comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is a blog body",
      "description":"this is blog 2 description",
      "title":"This is blog 1",
    },
    {
      "blogId":"2",
      "lastModified":"2016-01-05T09:05:05.035Z",
      "created":"2016-01-05T09:05:05.035Z",
      "tags":[],
      "author":"Admin",
      "category":"Comedy",
      "isPublished":true,
      "views":1,
      "bodyHtml":"this is a blog body",
      "description":"this is blog 3 description",
      "title":"This is blog 2",
    },
    {
      "blogId":"3",
      "lastModified":"2016-01-05T09:05:05.035Z",
      "created":"2016-01-05T09:05:05.035Z",
      "tags":[],
      "author":"Admin",
      "category":"Comedy",
      "isPublished":true,
      "views":0,
      "bodyHtml":"this is a blog body",
      "description":"this is blog 4 description",
      "title":"This is blog 3",
    }]
    public currentBlog: any;

    constructor() { 
      console.log("service constructor is called");
    }

    //method to return all the Blogs
    public getAllBlogs():any 
    {
       return this.getAllBlogs;
    }

    
    //method to get a particular blog 
    
    public getSingleBlogInformation(currentBlogId):any{
      //using a for of loop here from typescript
      //https://wwww.typescriptlang.org/docs/handbook/iterators-and-generators.html
      for(let blog of this.allBlogs)
      {
        if(blog.blogId == currentBlogId)
        {
          this.currentBlog=blog;
        }
        
      }
      
      console.log(this.currentBlog);
      return this.currentBlog;
    }//end get blog information  function
    
    
  
}
