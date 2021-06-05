import React, { useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/body.css';

function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }

function OutsideLinks() {
    return (
        <div>
            <ScrollToTopOnMount />

            <Breadcrumb className="sticky-top">
                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Links</BreadcrumbItem>
            </Breadcrumb>

            <div className="row">
                <div className="col">
                    <h1 className="d-none d-md-block">Outside Resources</h1>
                    <h2 className="d-md-none pt-3">Outside Resources</h2>
                    <hr/>

                    <p className="mr-md-3">For other resources relevant to the literary and writing world, as well as culture please check out:</p>
                    <div className="card mx-3">
                        <div className="card-body bg-warning">
                            <dl className="row">
                                <dd className="col-6 col-md-4"><a className="text-primary" href="https://www.emilydickinsonmuseum.org">Emily Dickinson Museum</a></dd>
                                <dd className="col-6 col-md-4"><a className="text-primary" href="https://www.edickinson.org">Emily Dickinson Online Archive</a></dd>
                                <dd className="col-6 col-md-4"><a className="text-primary" href="https://www.emilydickinsonmuseum.org/the-museum/our-site/the-evergreens/">The Evergreens</a></dd>
                                <dd className="col-6 col-md-4"><a className="text-primary" href="https://www.loc.gov">Library of Congress</a></dd>
                                <dd className="col-6 col-md-4"><a className="text-primary" href="http://gutenberg.org">Gutenberg Project</a></dd>
                                <dd className="col-6 col-md-4"><a className="text-primary" href="https://nebraskawriters.org">Nebraska Writer's Guild</a></dd>
                                <dd className="col-6 col-md-4"><a className="text-primary" href="https://omahalibrary.org">Omaha Public Library</a></dd>
                                <dd className="col-6 col-md-4"><a className="text-primary" href="https://www.writersdigest.com">Writers Digest</a></dd>
                                <dd className="col-6 col-md-4"><a className="text-primary" href="https://www.joslyn.org">Joslyn Art Museum</a></dd>
                                <dd className="col-6 col-md-4"><a className="text-primary" href="https://www.conciergemarketing.com">Concierge Marketing</a></dd>
                                <dd className="col-6 col-md-4"><a className="text-primary" href="https://www.lulu.com">Lulu Self Publishing</a></dd>
                                <dd className="col-6 col-md-4"><a className="text-primary" href="https://literaryagencies.com/members/pg/10/?cn-cat=56&cn-s">Directory of Literary Agents</a></dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OutsideLinks;   