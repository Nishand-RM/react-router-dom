import React from 'react';

const CourseCard = ({ title, description, date, author, duration }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <small className="text-muted">By {author}</small>
          <div className="mt-3">
            <span className="text-muted">{date}</span> | <span>{duration} Min Read</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
