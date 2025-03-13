using AutoMapper;
using Rado.Dyntro.Server.Data.Entities;
using Rado.Dyntro.Server.Order.ViewModel;

namespace Rado.Dyntro.Server.Order.Mapping
{
    public class OrderProfile : Profile
    {
        public OrderProfile()
        {
            CreateMap<Data.Entities.Order, OrderViewModel>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.Status, opt => opt.MapFrom(src => src.Status))
                .ForMember(dest => dest.Topic, opt => opt.MapFrom(src => src.Topic))
                .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.FirstName))
                .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.LastName))
                .ForMember(dest => dest.Category, opt => opt.MapFrom(src => src.Category))
                .ForMember(dest => dest.Priority, opt => opt.MapFrom(src => src.Priority))
                .ForMember(dest => dest.Date, opt => opt.MapFrom(src => src.Date));


            CreateMap<OrderViewModel, Data.Entities.Order>();

        }


        
    }
}
