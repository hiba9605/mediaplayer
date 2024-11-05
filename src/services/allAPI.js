
// saveVideoAPI -called Add Component

import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

//  save
 export const saveVideoAPI = async (videoDetails)=>{
 return await   commonAPI("POST",`${SERVERURL}/uploadVideos`,videoDetails)


}

// getAllVideosAPI -get http request callred by view component when component  displayed in browser inside its useeffect hook
export const getAllVideosAPI=async()=>{
    return await commonAPI("GET",`${SERVERURL}/uploadVideos`,"")
}

// saveHistoryAPI -post http request http://localhost:3000/History called by videocard component when we play video

export const saveHistoryAPI=async (historyDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/history`,historyDetails)
}

// getAllHistoryAPI - get http request to  http://localhost:3000/History called by history component when it open in browser
export const getAllHistoryAPI=async ()=>{
    return await commonAPI("GET",`${SERVERURL}/history`,"")
}

// deletehistoryAPI - delete http request to http://localhost:3000/History/id called by history componenet when user click on delete button

export const deleteHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/history/${id}`,{})
}

// removeVideoAPI - delete http request called by videocard componenet when user click on delete button

export const removeVideoAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/uploadVideos/${id}`,{})
}

// savecategoryAPI -post http request to http://localhost:3000/categories called by category component when user click on add data

export const saveCategoryAPI=async(categoryDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/categories`,categoryDetails)
}

export const getAllCategoryAPI=async(categoryDetails)=>{
    return await commonAPI("GET",`${SERVERURL}/categories`,{})
}

export const deleteCategoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/categories/${id}`,{})
}

// updatecategoryAPI -put http request to http://localhost:3000/categories/id called by category component when video drop over the category
export const updatecategoryAPI=async(categoryDetails)=>{
    return await commonAPI("PUT",`${SERVERURL}/categories/${categoryDetails.id}`,categoryDetails)
}