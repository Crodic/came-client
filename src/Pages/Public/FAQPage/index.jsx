import AccordionComponents from "../../../Components/Accordion";
import Breakcrumb from "../../../Components/Breakcrumb";
import NewsLetter from "../../../Components/NewsLetter";

const dataFAQ = [
    {
        key: 1,
        header: "Tôi có thể mua hàng bằng cách nào ?",
        body: "Hiện tại trang web chỉ hổ trợ giao hàng tận nơi và thanh toán sau khi nhận hàng. Thời gian nhận hàng có thể từ 2-3 ngày tuỳ địa điểm và vị trí địa lý",
    },
    {
        key: 2,
        header: "Tôi có thể kiểm trang hàng trước khi nhận hay không ?",
        body: "Bạn có thể mở lớp niêm phong trước khi tiến hành nhận hàng và thanh toán. Nhưng bạn không được mở hộp và seal của sản phẩm (Đối với sản phẩm mới)",
    },
    {
        key: 3,
        header: "Chính sách hoàn trả hàng như thế nào ?",
        body: 'Bạn có thể hoàn trả hàng trong vòng từ 3-5 ngày kể từ khi trạng thái đơn hàng của bạn chuyển sang "Đã nhận được hàng". Yêu cầu với sản phẩm mới phải còn bao bì và sản phẩm phải còn nguyên vẹn, chúng tôi sẽ không hoàn tiền nếu sản phẩm bị hư hại do chính khách hàng',
    },
    {
        key: 4,
        header: "Nếu sản phẩm giao không đúng thì sao ?",
        body: "Nếu nhận thấy sản phẩm được giao không đúng với hình ảnh trên trang web, hãy liên hệ ngay với chúng tôi để được hổ trợ",
    },
    {
        key: 5,
        header: "Chính sách bảo hành đối với sản phẩm cũ như thế nào ?",
        body: "Đối với sản phẩm cũ, chúng tôi sẽ bảo hành từ 3-5 tháng tuỳ loại figure và giá trị của figure đó. Bạn cũng sẽ nhận được phiếu bảo hành sản phẩm của chúng tôi trong kiện hàng",
    },
];

const FAQPage = () => {
    return (
        <div>
            <div className="bg-[#f7f7f7] py-[20px] px-[10px]">
                <Breakcrumb />
            </div>
            <div className="my-[50px]">
                <AccordionComponents data={dataFAQ} />
            </div>
            <NewsLetter />
        </div>
    );
};

export default FAQPage;
