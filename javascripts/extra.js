// 自定义 JavaScript 功能

document.addEventListener('DOMContentLoaded', function() {
    // 添加平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 代码复制功能增强
    document.querySelectorAll('.md-clipboard').forEach(button => {
        button.addEventListener('click', function() {
            // 显示复制成功提示
            const originalText = this.title;
            this.title = '已复制!';
            setTimeout(() => {
                this.title = originalText;
            }, 2000);
        });
    });

    // 添加返回顶部按钮
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--md-primary-fg-color);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    `;

    document.body.appendChild(backToTop);

    // 监听滚动显示/隐藏返回顶部按钮
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.transform = 'translateY(0)';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.transform = 'translateY(20px)';
        }
    });

    // 返回顶部功能
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 添加悬停效果
    backToTop.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.1)';
        this.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
    });

    backToTop.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    });

    // 图片懒加载
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // 外部链接添加图标
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.hostname.includes(window.location.hostname)) {
            link.innerHTML += ' <small>↗</small>';
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    });

    // 添加打印功能
    const printButton = document.createElement('button');
    printButton.innerHTML = '🖨️';
    printButton.title = '打印此页面';
    printButton.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--md-accent-fg-color);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 16px;
        opacity: 0.8;
        transition: all 0.3s ease;
        z-index: 999;
    `;

    printButton.addEventListener('click', function() {
        window.print();
    });

    printButton.addEventListener('mouseenter', function() {
        this.style.opacity = '1';
        this.style.transform = 'scale(1.1)';
    });

    printButton.addEventListener('mouseleave', function() {
        this.style.opacity = '0.8';
        this.style.transform = 'scale(1)';
    });

    document.body.appendChild(printButton);

    // 键盘快捷键
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K 打开搜索
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            const searchInput = document.querySelector('.md-search__input');
            if (searchInput) {
                searchInput.focus();
            }
        }
        
        // ESC 关闭搜索
        if (e.key === 'Escape') {
            const searchInput = document.querySelector('.md-search__input');
            if (searchInput && document.activeElement === searchInput) {
                searchInput.blur();
            }
        }
    });

    console.log('📖 百度地图 Flutter 文档加载完成！');
});