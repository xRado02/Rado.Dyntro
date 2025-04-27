using AutoMapper;
using Rado.Dyntro.Server.Data.Entities;
using Rado.Dyntro.Server.Models;

namespace Rado.Dyntro.Server.Profile
{
    public class OrderProfile : AutoMapper.Profile 
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
                .ForMember(dest => dest.Date, opt => opt.MapFrom(src => src.Date))
                .ForMember(dest => dest.UserId, opt => opt.MapFrom(src => src.UserId));

            CreateMap<OrderViewModel, Order>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.Status, opt => opt.MapFrom(src => src.Status))
                .ForMember(dest => dest.Topic, opt => opt.MapFrom(src => src.Topic))
                .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.FirstName))
                .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.LastName))
                .ForMember(dest => dest.Category, opt => opt.MapFrom(src => src.Category))
                .ForMember(dest => dest.Priority, opt => opt.MapFrom(src => src.Priority))
                .ForMember(dest => dest.Date, opt => opt.Ignore()) // nadpisujesz i tak
                .ForMember(dest => dest.UserId, opt => opt.MapFrom(src => src.UserId))
                .ForMember(dest => dest.User, opt => opt.Ignore()); // <- to może być problem!

        }
    }
}
