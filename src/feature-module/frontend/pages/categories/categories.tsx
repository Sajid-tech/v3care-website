import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BreadCrumb from '../../common/breadcrumb/breadCrumb';
import axios from 'axios';
import * as Icon from 'react-feather';
import BASE_URL from '../../../baseConfig/BaseUrl';

interface Service {
  id: number;
  service: string;
  service_image: string | null;
}

interface ServiceSub {
  id: number;
  service_sub: string;
  service_sub_image: string | null;
}

const Categories = () => {
  const { id } = useParams<{ id?: string }>();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [subServices, setSubServices] = useState<ServiceSub[]>([]);
  const [showSubServiceModal, setShowSubServiceModal] = useState(false);
  const [subServiceLoading, setSubServiceLoading] = useState(false);
  const navigate = useNavigate();

  const fetchServices = async () => {
    try {
      setLoading(true);
      setError(null);
      const url = id 
        ? `${BASE_URL}/api/panel-fetch-web-service-out/${id}`
        : `${BASE_URL}/api/panel-fetch-web-service-out/2`;
      
      const response = await axios.get<{ service: Service[] }>(url);
      setServices(response.data.service || []);
    } catch (error) {
      console.error('Error fetching services:', error);
      setError('Failed to load services. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const fetchSubServices = async (serviceId: number,serviceName: string) => {
    try {
      setSubServiceLoading(true);
      const response = await axios.get<{ servicesub: ServiceSub[] }>(
        `${BASE_URL}/api/panel-fetch-web-service-sub-out/${serviceId}`
      );
      
      if (response.data.servicesub && response.data.servicesub.length > 0) {
        setSubServices(response.data.servicesub);
        setShowSubServiceModal(true);
      } else {
        navigate('/services/service-details/service-details1', {
          state: {
            service_id: serviceId,
            service_name: serviceName
          }
        });
      }
    } catch (error) {
      console.error('Error fetching sub-services:', error);
      navigate('/services/service-details/service-details1', {
        state: {
          service_id: serviceId,
          service_name: serviceName
        }
      });
    } finally {
      setSubServiceLoading(false);
    }
  };

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    fetchSubServices(service.id, service.service);
  };

  const getImageUrl = (imageName: string | null, isSubService = false) => {
    if (!imageName) {
      return "http://agscare.site/crmapi/public/storage/no_image.jpg";
    }
    return isSubService 
      ? `http://agscare.site/crmapi/public/storage/service_sub/${imageName}`
      : `http://agscare.site/crmapi/public/storage/service/${imageName}`;
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    fetchServices();
  }, [id]);

  if (loading) {
    return (
      <>
        <BreadCrumb title="Categories" item1="Categories" />
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading services...</p>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <BreadCrumb title="Categories" item1="Categories" />
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="alert alert-danger d-flex align-items-center" role="alert">
            <i className="fas fa-exclamation-circle me-2"></i>
            <div>{error}</div>
            <button 
              className="btn btn-sm btn-outline-danger ms-3"
              onClick={fetchServices}
            >
              <i className="fas fa-sync-alt me-1"></i>
              Try Again
            </button>
          </div>
        </div>
      </>
    );
  }

  if (services.length === 0) {
    return (
      <>
        <BreadCrumb title="Categories" item1="Categories" />
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="text-center">
            <img
              src="http://agscare.site/crmapi/public/storage/no_image.jpg"
              alt="No services found"
              className="img-fluid mb-3"
              style={{ maxWidth: '300px' }}
            />
            <h4>No services found</h4>
            <p>We couldn not find any services matching your criteria.</p>
            {id && (
              <Link to="/pages/categories" className="btn btn-primary">
                View all categories
              </Link>
            )}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <BreadCrumb title="Categories" item1="Categories" />
      <div className="page-wrapper">
        <div className="content">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              {services.map((service: Service, index: number) => (
                <div key={service.id} className="col-lg-3 col-md-6 mb-4">
                  <div className="card h-100 wow fadeInUp" data-wow-delay={`${0.1 * index}s`}>
                    <div className="card-body d-flex flex-column align-items-center">
                      <div 
                        className="w-100 text-decoration-none cursor-pointer"
                        onClick={() => handleServiceClick(service)}
                      >
                        <div className="mb-3 w-100" style={{ height: '150px', overflow: 'hidden' }}>
                          <img
                            src={getImageUrl(service.service_image)}
                            className="img-fluid w-100 h-100 object-fit-cover"
                            alt={service.service}
                            style={{ borderRadius: '8px' }}
                          />
                        </div>
                        <h5 className="text-center mb-0">{service.service}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Service Modal */}
      {showSubServiceModal && (
  <div className="modal fade show d-block" style={{ 
    backgroundColor: 'rgba(0,0,0,0.3)',
    backdropFilter: 'blur(3px)'
  }} tabIndex={-1}>
    <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '680px' }}>
      <div className="modal-content border-0" style={{
        boxShadow: '0 5px 30px rgba(236, 72, 153, 0.2)',
        borderRadius: '14px',
        overflow: 'hidden'
      }}>
        {/* Modal Header - Pink Theme */}
        <div className="modal-header py-3 px-4" style={{
          background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
          borderBottom: 'none'
        }}>
          <h5 className="modal-title text-white" style={{
            fontSize: '0.9rem',
            fontWeight: 600,
            letterSpacing: '0.3px'
          }}>
            <Icon.Grid className="me-2" size={18} />
            Select {selectedService?.service}
          </h5>
          <button 
            type="button" 
            className="btn-close btn-close-white" 
            onClick={() => setShowSubServiceModal(false)}
            aria-label="Close"
          />
        </div>

        {/* Modal Body - Original Card Dimensions */}
        <div className="modal-body p-3" style={{ 
          maxHeight: '65vh',
          overflowY: 'auto',
          scrollbarWidth: 'thin',
          
        }}>
          {subServiceLoading ? (
            <div className="d-flex justify-content-center align-items-center py-4">
              <div 
                className="spinner-grow spinner-grow-sm" 
                role="status"
                style={{ color: '#ec4899' }}
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row g-2">
              {subServices.map((subService) => (
                <div key={subService.id} className="col-6 col-sm-4 col-md-3" >
                  <div 
                    className="card h-100 border-0 overflow-hidden transition-all position-relative"
                    onClick={() => navigate('/services/service-details/service-details1', {
                      state: {
                        service_id: selectedService?.id,
                        service_name: selectedService?.service,
                        service_sub_id: subService.id,
                        service_sub_name: subService.service_sub
                      }
                    })}
                    style={{
                      cursor: 'pointer',
                      transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                      borderRadius: '8px',
                      border: '2px solid rgba(236, 72, 153, 0.1)',
                      
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 8px 15px rgba(236, 72, 153, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = '';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.1)';
                    }}
                  >
                    <div className="ratio ratio-1x1" style={{ backgroundColor: '#fdf2f8', }}>
                      <img
                        src={getImageUrl(subService.service_sub_image, true)}
                        alt={subService.service_sub}
                        className="img-fluid object-fit-cover"
                        style={{ 
                          objectPosition: 'center',
                          height: '100%',
                          width: '100%'
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "http://agscare.site/crmapi/public/storage/no_image.jpg";
                        }}
                      />
                    </div>
                    <div className="card-body p-2 text-center">
                      <h6 className="card-title mb-0" style={{
                        fontSize: '0.9rem',
                        color: '#000000',
                        fontWeight: 500,
                        lineHeight: 1.25,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {subService.service_sub}
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer - Pink Theme */}
        <div className="modal-footer py-2 px-3" style={{
          background: 'linear-gradient(to right, #ffffff, #fdf2f8)',
          borderTop: '1px solid rgba(236, 72, 153, 0.1)'
        }}>
          <button 
            type="button" 
            className="btn btn-sm px-3 fw-medium"
            onClick={() => setShowSubServiceModal(false)}
            style={{
              fontSize: '0.8rem',
              backgroundColor: '#ec4899',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '0.35rem 1rem',
              boxShadow: '0 2px 5px rgba(236, 72, 153, 0.3)'
            }}
          >
            Close Selection
          </button>
        </div>
      </div>
    </div>
  </div>
)}
    </>
  );
};

export default Categories;