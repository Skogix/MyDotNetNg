import { onRequestDelete as __api_tasks__id__js_onRequestDelete } from "/home/user/MyDotNetNg/functions/api/tasks/[id].js"
import { onRequestGet as __api_tasks__id__js_onRequestGet } from "/home/user/MyDotNetNg/functions/api/tasks/[id].js"
import { onRequestOptions as __api_tasks__id__js_onRequestOptions } from "/home/user/MyDotNetNg/functions/api/tasks/[id].js"
import { onRequestPut as __api_tasks__id__js_onRequestPut } from "/home/user/MyDotNetNg/functions/api/tasks/[id].js"
import { onRequestGet as __api_health_js_onRequestGet } from "/home/user/MyDotNetNg/functions/api/health.js"
import { onRequestGet as __api_tasks_index_js_onRequestGet } from "/home/user/MyDotNetNg/functions/api/tasks/index.js"
import { onRequestOptions as __api_tasks_index_js_onRequestOptions } from "/home/user/MyDotNetNg/functions/api/tasks/index.js"
import { onRequestPost as __api_tasks_index_js_onRequestPost } from "/home/user/MyDotNetNg/functions/api/tasks/index.js"

export const routes = [
    {
      routePath: "/api/tasks/:id",
      mountPath: "/api/tasks",
      method: "DELETE",
      middlewares: [],
      modules: [__api_tasks__id__js_onRequestDelete],
    },
  {
      routePath: "/api/tasks/:id",
      mountPath: "/api/tasks",
      method: "GET",
      middlewares: [],
      modules: [__api_tasks__id__js_onRequestGet],
    },
  {
      routePath: "/api/tasks/:id",
      mountPath: "/api/tasks",
      method: "OPTIONS",
      middlewares: [],
      modules: [__api_tasks__id__js_onRequestOptions],
    },
  {
      routePath: "/api/tasks/:id",
      mountPath: "/api/tasks",
      method: "PUT",
      middlewares: [],
      modules: [__api_tasks__id__js_onRequestPut],
    },
  {
      routePath: "/api/health",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_health_js_onRequestGet],
    },
  {
      routePath: "/api/tasks",
      mountPath: "/api/tasks",
      method: "GET",
      middlewares: [],
      modules: [__api_tasks_index_js_onRequestGet],
    },
  {
      routePath: "/api/tasks",
      mountPath: "/api/tasks",
      method: "OPTIONS",
      middlewares: [],
      modules: [__api_tasks_index_js_onRequestOptions],
    },
  {
      routePath: "/api/tasks",
      mountPath: "/api/tasks",
      method: "POST",
      middlewares: [],
      modules: [__api_tasks_index_js_onRequestPost],
    },
  ]