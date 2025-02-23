import QRCode from "react-qr-code";

export default function Page() {
    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            minHeight: '100vh' 
        }}>
            <QRCode
                size={200}
                style={{ height: "350px", width: "350px" }}
                value={"Cute"}
                viewBox={`0 0 256 256`}
            />
        </div>
    );
}
