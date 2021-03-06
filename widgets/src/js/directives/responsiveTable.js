angular.module('hsgc').directive('responsiveTable', function() {
    return {
        restrict: 'A',
        transclude: 'element',
        priority: 1001,
        terminal: true,
        link: function link($scope, el, iAttrs, controller, $transclude) {
            var wrapper = angular.element(
                '<div class="digital-scout-responsive-table-wrapper" />'
            );
            var scrollable = angular.element(
                '<div class="digital-scout-table-scrollable" />'
            );
            var pinned = angular.element(
                '<div class="digital-scout-table-pinned" />'
            );
            wrapper.append(scrollable).append(pinned);
            el.replaceWith(wrapper);
            $transclude($scope, function(clone) {
                scrollable.append(
                    clone.addClass('digital-scout-table-responsive')
                );
            });
            $transclude($scope, function(clone) {
                pinned.append(clone);
            });
        }
    };
});
