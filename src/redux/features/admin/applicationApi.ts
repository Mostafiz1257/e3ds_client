import { baseApi } from "../../api/baseApi";

const jobApplicationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createApplication: builder.mutation({
      query: (data) => {
        return {
          url: `/application/create-application`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["application"],
    }),
    getAllApplication: builder.query({
      query: () => ({
        url: "/application/all-application",
        method: "GET",
      }),
      providesTags: ["application"],
    }),
    deleteApplication: builder.mutation({
      query: (id) => ({
        url: `/application/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["application"],
    }),
  }),
});

export const {
  useCreateApplicationMutation,
  useGetAllApplicationQuery,
  useDeleteApplicationMutation,
} = jobApplicationApi;
