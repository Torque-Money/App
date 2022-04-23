import ShellWrapper from "../../components/Shell";
import { WalletProvider, CSSProvider, ErrorProvider } from "../../providers";

export default function DefaultLayout({ children }: { children: any }) {
    return (
        <WalletProvider>
            <CSSProvider>
                <ErrorProvider>
                    <ShellWrapper>{children}</ShellWrapper>
                </ErrorProvider>
            </CSSProvider>
        </WalletProvider>
    );
}
