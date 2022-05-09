import React, { useEffect, useState } from 'react';

const Configuracion = ({ width, children }) => {

    const [xPosition, setX] = useState(-width);

    const mostrarOcultarSidebar = () => {
        if (xPosition < 0) {
            setX(0);
        } else {
            setX(-width);
        }
    };

    useEffect(() => {
        setX(0);
    }, []);
    return (
        <React.Fragment>
            <div
                style={{
                    transform: `translatex(${xPosition}px)`,
                    width: width,
                    minHeight: "100%",
                    position: "absolute",
                    right: "0px",
                    top: 0,
                    height: "100vh !important",
                    display: "flex",
                    flexDirection: "column",
                    borderRight: "1px solid",
                    borderRadius: "0",
                    borderColor: "rgb(160, 160, 160)",
                    backgroundColor: "#f3f2f2"
                }}
            >
                <div className="content">{children}</div>
            </div>

        </React.Fragment >
    );
};

export default Configuracion;