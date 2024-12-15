import { baseApi } from "../../api/baseApi";

const jobPostApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createJob: builder.mutation({
      query: (data) => {
        return {
          url: `/job/create-jobPost`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["job"],
    }),
    getAllJobPost: builder.query({
      query: () => ({
        url: "/job/all-jobPost",
        method: "GET",
      }),
      providesTags: ["job"],
    }),
    updateJobPost: builder.mutation({
      query: ({ updateData, Id }) => {
        return {
          url: `/job/${Id}`,
          method: "PATCH",
          body: updateData,
        };
      },
      invalidatesTags: ["job"],
    }),
    getSinglePost: builder.query({
      query: (id) => ({
        url: `/job/${id}`,
        method: "GET",
      }),
      providesTags: ["job"],
    }),
    deleteJobPost: builder.mutation({
      query: (id) => ({
        url: `/job/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["job"],
    }),
  }),
});

export const {
  useCreateJobMutation,
  useGetAllJobPostQuery,
  useUpdateJobPostMutation,
  useGetSinglePostQuery,
  useDeleteJobPostMutation,
} = jobPostApi;
